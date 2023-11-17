/////////////////
// UI design
import UI from './UI';
import DataPages from '@/lib/DataPages';

export default async function Page(props) {
  const data = DataPages.filter(e => e.title == 'Home')

  return (
    <UI dataHomePage={data[0]} {...props} />
  );
}

