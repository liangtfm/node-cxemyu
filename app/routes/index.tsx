export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Cool Amazon Price Tracking App</h1>
      <h1>Stevens Todo List</h1>
      <ol>
        <li>Text input field for the Amazon link</li>
        <li>Submit button for the Text Input field</li>
        <li>Render a list of the items we are tracking</li>
      </ol>
      <h2>Helpful links</h2>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
        <li>
          <a target="_blank" href="https://reactjs.org/docs/getting-started.html">React Docs</a>
          </li>
      </ul>
    </div>
  );
}
