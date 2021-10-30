import React from 'react'

const Users = ({ loading, users }) => {
  const mainstyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(' + 3 + ',' + 1 + 'fr)',
  };
  return loading ? (
    <div id="main" align="center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Loaading.." className="loader" />
    </div>
  ) :
    (
      <div id="main" style={mainstyle}>

        {users.map(user =>
          <div className="profile_cont" key={user.id}>
            {
              console.log(user)
            }

            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
            <h1 className="name">{user.first_name} {user.last_name}</h1>
            <p className="email">{user.email}</p>
           
          </div>
        )
        }
      </div>
    )
}

export default Users; 