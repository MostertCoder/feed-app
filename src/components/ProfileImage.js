import React from "react";

import Image from "react-bootstrap/Image";

const ProfileImage = (props) => {
  return (
    <Image
      src={`https://avatars.dicebear.com/api/initials/${props.name}.svg`}
      width="25"
      height="25"
      roundedCircle
    />
  );
};

export default ProfileImage;
