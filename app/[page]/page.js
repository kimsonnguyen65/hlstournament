/////////////////
// UI design
import UI from './UI';
import DataPages from '@/lib/DataPages';

export default async function Page(props) {
  const dataPage = DataPages.filter(e => e.slug == props.params.page)

  return (
    <UI dataPage={dataPage[0]} {...props} />
  );
}

