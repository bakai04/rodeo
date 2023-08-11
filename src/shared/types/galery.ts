export interface IImageType {
  image_url: string
}

export interface IGalery {
  title: {
      page_title: string,
      upper_title: string,
      lower_title: string,
      image_url: string
    },
    data: {
      scroll_images: IImageType[]
      upper_images: IImageType[]
      lower_images: IImageType[]
    }
}


export interface ITournament {
    title: string,
    location: string,
    date: string,
    tile: string,
    image_url: string
}

export interface ITournamentScrollEvents {
  title: string,
  description: string
  image_url: string
}


export interface ITournamentResponce {
    title: {
      title: string,
      image_url: string
    },
    tournaments: ITournament[],
    events: {
      scroll_events: ITournamentScrollEvents[],
      default_events: ITournamentScrollEvents[]
    }
}