import { useQuery,gql } from "@apollo/client"
import { launchesPastData } from "../types/types"


const GET_LAUNCHES = gql`
    query {
  launchesPast (limit: 20) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
      flickr_images
      wikipedia
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          flight
          core {
            reuse_count
            status
          }
        }
      }
    }
    id
  }
}
`

export const useLaunches = () => {
    const {data,error,loading} = useQuery<launchesPastData>(GET_LAUNCHES)
    return {data,error,loading}
}