import { FC } from 'react'

type Props = {
  latitude: number | null
  longitude: number | null
}

const Geolocation: FC<Props> = ({ latitude, longitude }) => (
  <div>
    <h3>Geolocation:</h3>
    <div>Latitude: {latitude}</div>
    <div>Longitude: {longitude}</div>
  </div>
)

export default Geolocation
