import { useCallback, useMemo, useState } from 'react';
import CountryCheckbox from './components/CountryCheckbox';

function App() {
  const options = ["Argentina", "Brasil", "Chile"];
  const [selected, setSelected] = useState<Array<string>>([]);

  const isSelectedAll = useMemo(() => selected.length == options.length, [selected]);

  const toggleAll = useCallback(() => {
    if (selected.length == options.length) setSelected([]);
    else setSelected([...options]);
  }, [selected]);

  const toggle = useCallback((value: string) => {
    if (selected.includes(value)) setSelected(selected.filter(v => v !== value));
    else setSelected([...selected, value]);
  }, [selected]);

  return (
    <>
      <CountryCheckbox label="Select All" checked={isSelectedAll} onClick={toggleAll} />
      {
        options.map((value) => <CountryCheckbox label={value} checked={selected.includes(value)} onClick={() => toggle(value)} />)
      }
    </>
  );
}

export default App;