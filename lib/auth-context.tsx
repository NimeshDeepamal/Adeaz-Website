'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  isLoggedIn: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  favorites: string[]
  addToFavorites: (productId: string) => void
  removeFromFavorites: (productId: string) => void
  isFavorite: (productId: string) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [favorites, setFavorites] = useState<string[]>([])

  // Load user and favorites from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('adeaz-user')
    const storedFavorites = localStorage.getItem('adeaz-favorites')
    
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  // Save favorites to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('adeaz-favorites', JSON.stringify(favorites))
    }
  }, [favorites, user])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login - in real app, this would call an API
    if (email && password) {
      const newUser = {
        id: '1',
        name: email.split('@')[0],
        email,
      }
      setUser(newUser)
      localStorage.setItem('adeaz-user', JSON.stringify(newUser))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    setFavorites([])
    localStorage.removeItem('adeaz-user')
    localStorage.removeItem('adeaz-favorites')
  }

  const addToFavorites = (productId: string) => {
    if (!favorites.includes(productId)) {
      setFavorites((prev) => [...prev, productId])
    }
  }

  const removeFromFavorites = (productId: string) => {
    setFavorites((prev) => prev.filter((id) => id !== productId))
  }

  const isFavorite = (productId: string) => {
    return favorites.includes(productId)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        logout,
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
