// import React, { useState, useCallback, useEffect } from 'react'
// import {
//   GoogleMap,
//   LoadScript,
//   DirectionsService,
//   Marker,
//   DirectionsRenderer,
// } from '@react-google-maps/api'

// const containerStyle = {
//   width: '95%',
//   height: '60%',
// }

// const center = {
//   lat: 21.19076752105692,
//   lng: 80.74886449784552,
// }
// const destination = '21.191142700157222, 80.7483615420005'
// const travelMode = 'DRIVING'

// const gmapOptions = {
//   zoomControl: true,
// }

// const marker = {
//   label: 'Hair Style',
//   title: 'title',
//   shape: 'MarkerShapeRect',
// }

// function MyComponent() {
//   const [res, setRes] = useState('')

//   const [origin, setOrigin] = useState('')
//   const directionsCallback = useCallback((response) => {
//     if (response?.status === 'OK') {
//       setRes(response)
//     }
//   }, [])

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       setOrigin(`${position?.coords?.latitude}, ${position?.coords?.longitude}`)
//     })
//   }, [])

//   return (
//     <section
//       id='location'
//       className='bg-gradient-to-tl from-gray-700 via-gray-800 to-gray-900'
//     >
//       <div className='flex flex-col gap-4 justify-center sm:justify-center items-center h-screen w-full'>
//         <div className=' text-gray-400 text-2xl text-center'>
//           {res && (
//             <span>
//               <span> Saloon is </span>
//               <span className='text-pink-600 font-bold animate-pulse'>
//                 {res?.routes[0]?.legs[0]?.distance?.text}
//               </span>
//               <span> away, </span>
//               <div>
//                 <span>It will take </span>
//                 <span className='text-pink-600 font-bold animate-pulse'>
//                   {res?.routes[0]?.legs[0]?.duration?.text}
//                 </span>
//                 <span> to reach there By Car.</span>
//               </div>
//             </span>
//           )}
//         </div>
//         <LoadScript
//           googleMapsApiKey={
//             process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY
//           }
//         >
//           <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}
//             zoom={8}
//             options={gmapOptions}
//           >
//             <Marker
//               position={destination}
//               label={marker.label}
//               title={marker.title}
//               shape={marker.shape}
//             />
//             {!res && (
//               <DirectionsService
//                 options={{
//                   destination: destination,
//                   origin: origin,
//                   travelMode: travelMode,
//                 }}
//                 callback={directionsCallback}
//               />
//             )}
//             {res && (
//               <DirectionsRenderer
//                 options={{
//                   directions: res,
//                 }}
//               />
//             )}
//           </GoogleMap>
//         </LoadScript>
//       </div>
//     </section>
//   )
// }

// export default React.memo(MyComponent)
