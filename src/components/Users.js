import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                return res.json();
            }).then((data) => {
                const usersData = data.map(item => {
                    const { id, name } = item;
                    return { id, name };
                });
                setUsers(usersData);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])


    const handleclick = () => {
        setUsers((prev) => {
            return [...prev, 'Hacı'];
        });
    }

    const showDetail = (userId) => {
        // console.log(userId);
        setUsers((prev) => {
            return prev.map((user) => {
                let { id, name } = user;
                if (id === userId) {
                    name += " ...loading... ";
                }
                return { id, name };
            });
        });
        fetch("https://jsonplaceholder.typicode.com/users/" + userId)
            .then((res) => {
                return res.json();
            }).then((data) => {
                setUsers((prev) => {
                    return prev.map((user) => {
                        let { id, name } = user;
                        if (id === userId) {
                            name = data.name + "<hr/>" + data.username + "<br/> " + data.email;
                        }
                        return { id, name };
                    });
                });
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {

            });
    }

    return (
        <div className='flex-container'>
            {
                loading ? 'LOADING' :
                    users && users.map((user, index) => {
                        return <div className='list-item' onClick={showDetail.bind(null, user.id)}
                            key={user.id}>
                            {/* <Link to={`/users/${user.id}`}> */}
                                {user.name}
                            {/* </Link> */}
                        </div>
                    })
            }
        </div>
    )
}

export default Users;