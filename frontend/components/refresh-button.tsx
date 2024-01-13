'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

export default function RefreshButton() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <button
      className={`${isPending ? 'cursor-not-allowed text-gray-100' : ''
        } text-sm text-gray-300 hover:text-gray-100`}
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          router.refresh()
        })
      }}
    >
      {isPending ? 'Refreshing...' : 'Refresh'}
    </button>
  );
};
