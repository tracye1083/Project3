import React from 'react';

import { QUERY_ME, QUERY_SINGLE_PROFILE} from '../utils/queries';

import { useQuery } from '@apollo/client';

const Profile = () => {

  const { loading, data } = useQuery(QUERY_ME);
  const profile = data?.me || {}

  const { loading: drinkLoading, data: drinkData } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { profileId: profile._id}
  })

  const drinkData1 = drinkData?.profile || []
  console.log(profile)
  console.log(profile._id)
  console.log(drinkData1);

  return (

    <h1>Hello {profile.name}</h1>

  )
};

export default Profile;

// import React, { useState } from 'react';
// import { Container } from 'react-bootstrap';
// import { useLazyQuery } from '@apollo/client';
// import Auth from '../utils/auth';
// import { Jumbotron, CardColumns, Card, Button } from 'react-bootstrap';
// import { useQuery, useMutation } from '@apollo/react-hooks';
// import { REMOVE_DRINK } from '../utils/mutations';
// import { QUERY_PROFILES } from '../utils/queries';

// import { Redirect, useParams } from 'react-router-dom';

// import { QUERY_ME } from '../utils/queries';


// const ProfileSearch = () => {
//   // const [searchId, setSearchId] = useState('');
  
// const { loading, data } = useQuery(QUERY_ME);
// const profile = data?.me || {}

//   // const [search, { loading, data }] = useLazyQuery(QUERY_PROFILES, {
//   //   variables: { profileId: searchId }
//   // })

//   // const findProfile = async () => {
//   //   setSearchId(searchId)
//   //   search();
//   // }
//   // findProfile()
//   // const [search, { loading, data }] = useLazyQuery(QUERY_SINGLE_PROFILE, {
//   //   variables: { profileId: searchTerm }
//   // })
  
//   // const profileData = data?.profiles || [];


//   console.log("prof: ", profile)

//   //NOt suree what to use below here
//   // const { profileId } = useParams();

//   // // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
//   // const { loading, data } = useQuery(
//   //   profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
//   //   {
//   //     variables: { profileId: profileId },
//   //   }
//   // );

//   // // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
//   // const profile = data?.me || data?.profile || {};

//   // // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
//   // if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
//   //   return <Redirect to="/me" />;
//   // }

//   // if (loading) {
//   //   return <div>Loading...</div>;
//   // }

//   // if (!profile?.name) {
//   //   return (
//   //     <h4>
//   //       You need to be logged in to see your profile page. Use the navigation
//   //       links above to sign up or log in!
//   //     </h4>
//   //   );
//   // }
//   // }


//   // if (loading) {
//   //   return <div>Loading...</div>;
//   // }

//   // if (!profile._id) {
//   //   return (
//   //     <h4>
//   //       You need to be logged in to see your profile page. Use the navigation
//   //       links above to sign up or log in!
//   //     </h4>
//   //   );
//   // }

//   return (

//     // <Container>
//       <h1 className='userPageText' >Your saved drinks:  </h1>
//     // </Container>


//   );
// };

// export default Profile;
