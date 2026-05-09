import { Suspense } from 'react'
import CustomersTable from '../../customers/table'
import { CardSkeleton } from '../../skeletons'

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string }
}) {
  const query = searchParams?.query || ''

  return (
    <div>
      <Suspense fallback={<CardSkeleton />}>
        <CustomersTable query={query} />
      </Suspense>
    </div>
  )
}