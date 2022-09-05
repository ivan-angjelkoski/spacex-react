export interface launchesPast {
    mission_name: string,
    launch_date_local: string,
    launch_site: {
        site_name_long: string
      }
      links: {
        article_link: string,
        video_link: string,
        flickr_images: string,
        wikipedia: string
      }
      rocket: {
        rocket_name: string,
        first_stage: {
          cores: {
            flight: number,
            core: {
              reuse_count: number
              status: string,
            }
          }
        }
        }
    id: string
}

export interface launchesPastData {
        launchesPast: launchesPast[]
}

export interface launch {
  id: string,
    details: string,
    is_tentative: boolean,
    launch_date_local: string,
    launch_date_unix: number,
    launch_date_utc: string,
    launch_site: {
      site_id: string,
      site_name: string,
      site_name_long: string,
    }
    launch_success: boolean,
    launch_year: string,
    links: {
      flickr_images: string[],
      wikipedia: string,
    }
    mission_id: string,
    mission_name: string,
    rocket: {
      rocket_name: string,
      rocket_type: string,
      first_stage: {
        cores: {
          land_success: boolean,
          reused: boolean,
        }[]
      }
    }
}

export interface launchData {
  launch: launch
}

export interface Comment {
  launch_id: String,
  comment: String,
  name: String
}