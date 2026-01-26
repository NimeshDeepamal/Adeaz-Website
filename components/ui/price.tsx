import { cn, formatPrice } from '@/lib/utils'

interface PriceProps {
  price: number
  originalPrice?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Price({
  price,
  originalPrice,
  size = 'md',
  className,
}: PriceProps) {
  const hasDiscount = originalPrice && originalPrice > price
  const discountPercentage = hasDiscount
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0

  return (
    <div className={cn('flex items-center gap-2 flex-wrap', className)}>
      <span
        className={cn('font-semibold text-foreground', {
          'text-sm': size === 'sm',
          'text-base': size === 'md',
          'text-xl': size === 'lg',
        })}
      >
        {formatPrice(price)}
      </span>
      {hasDiscount && (
        <>
          <span
            className={cn('text-muted-foreground line-through', {
              'text-xs': size === 'sm',
              'text-sm': size === 'md',
              'text-base': size === 'lg',
            })}
          >
            {formatPrice(originalPrice)}
          </span>
          <span
            className={cn('text-red-500 font-medium', {
              'text-xs': size === 'sm',
              'text-sm': size === 'md',
              'text-base': size === 'lg',
            })}
          >
            ({discountPercentage}% off)
          </span>
        </>
      )}
    </div>
  )
}
