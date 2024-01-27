import TaskItem from './task-item';


export type Task = {
  id: string,
  title: string
}


export default async function Tasks() {
  const accessToken = process.env.LINEAR_API_KEY;

  async function fetchData() {
    const url = "https://api.linear.app/graphql";
    const query = '{ "query": "{ issues { nodes { id title } } }" }';

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${accessToken}`
        },
        body: query
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const nodes = data.data.issues.nodes;
      return nodes;
    } catch (error) {
      console.error("Error:", error);
    }
  }


  const tasks = await fetchData() ?? [];


  const TaskList = (props: any) => (
    tasks.map((task: Task) => 
      <TaskItem task={task} />
    )
  );

  return (
    <main className='p-6'>
      <ul className='p-4 max-w-sm mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg'>
        <TaskList />
      </ul>
    </main>
  )
}