import React from 'react';

import Header from './Header';

function App() {
  return (
    <div className="layout layout--column">
      <Header />
      <main className="layout__flex layout">
        <aside>1111</aside>
        <section className="layout__flex">111111</section>
        <aside>111</aside>
      </main>
    </div>
  );
}

export default App;
