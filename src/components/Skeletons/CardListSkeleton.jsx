import { Skeleton } from 'primereact/skeleton';

export const CardListSkeleton = () => {

  const n = 8; 

  return (

    <div className="card-gallery-skeleton">
        {
          [...Array(n)].map((e,i) => (
            <div key={i} className="skeletons">
                <Skeleton style={{marginLeft:'20px'}} width="180px" height="280px"></Skeleton>
            </div>
            )
          )
        }
    </div>
  )
}
