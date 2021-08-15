import React from 'react';

import Card from 'react-bootstrap/Card';

import ProfileImage from './ProfileImage';

const Tweet = (props) => {
    return (
        <Card className="mt-2 shadow-sm">
            <Card.Header className="bg-white border-0 d-flex justify-content-between align-items-center">
                <ProfileImage name={props.name} /> <span>@{props.name}</span>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {props.tweet}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Tweet;