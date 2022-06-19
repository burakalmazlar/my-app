import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
    const params = useParams();
    // console.log(params);
    const [user, setUser] = useState();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + params.id)
            .then((res) => {
                return res.json();
            }).then((data) => {
                setUser(data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {

            });

        return () => {
            
        }
    }, [])


    return (
        user && <div>{user.name} {user.username} {user.email}</div>
    )
}

export default User;