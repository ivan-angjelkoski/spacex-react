import { useQuery,gql } from "@apollo/client"
import React from "react"

const GET_LAUNCH = gql`
query getLaunch($id: ID!) {
  launch(id: $id) {
    id
    details
    is_tentative
    launch_date_local
    launch_date_unix
    launch_date_utc
    launch_site {
      site_id
      site_name
      site_name_long
    }
    launch_success
    launch_year
    links {
      flickr_images
      wikipedia
    }
    mission_id
    mission_name
    rocket {
      rocket_name
      rocket_type
      first_stage {
        cores {
          land_success
          reused
        }
      }
    }
  }
}

`

export const useLaunch = (id: string) => {
    const query = useQuery(GET_LAUNCH,{variables: {
        id
    }})
    return query
}