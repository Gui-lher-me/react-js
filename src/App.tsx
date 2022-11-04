import { useScript } from './hooks/useScript';

declare const TEST_SCRIPT: {
  start: () => string;
};

export default function App() {
  const status = useScript(
    'https://pm28k14qlj.codesandbox.io/test-external-script.js'
  );

  return (
    <div>
      <div>
        Script status: <b>{status}</b>
      </div>
      {status === 'ready' && (
        <div className='font-sans mx-0 text-indigo-500 font-bold'>
          Script function call response: <b>{TEST_SCRIPT.start()}</b>
        </div>
      )}
    </div>
  );
}
