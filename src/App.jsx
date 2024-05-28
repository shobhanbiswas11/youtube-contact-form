import ContactForm from "./components/contact-form";
import { sendEmailAndMessage } from "./lib/api";

function App() {
  return (
    <div className="container max-w-screen-sm mt-20">
      <ContactForm onSend={sendEmailAndMessage} />
    </div>
  );
}

export default App;
