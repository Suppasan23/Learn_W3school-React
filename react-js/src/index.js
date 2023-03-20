import ReactDOM from "react-dom/client";
import { useState } from "react";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

