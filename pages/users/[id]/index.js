import { useRouter } from "next/router";

export default function UserProfile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}

export const getStaticPaths = async () => {
  const users = await fetch('https://jsonplaceholder.typicode.com/users');
  const usersData = await users.json();

  const userIds = usersData.map(user => user.id);

  const params = userIds.map(id => ({
    params: { id: id.toString() }
  }));

  console.log(params)
  return {
    paths: userIds.map(id => ({
      params: { id: id.toString() }
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  console.log(context);
  const { id } = context.params;

  const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  const user = await userData.json();

  return {
    props: {
      user,
    }
  };
};
