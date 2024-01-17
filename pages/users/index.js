import Link from "next/link";

export default function UsersPage({ users }) {
  console.log(users)

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} key={user.id} >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps = async () => {
  const usersData = await fetch('https://jsonplaceholder.typicode.com/users');

  const users = await usersData.json();

  return {
    props: {
      users,
    }
  }
};

