import { createRoot } from "react-dom/client";
import { CombinedProviders } from "./lib/CombinedProviders";

createRoot(document.getElementById("root")).render(<CombinedProviders />);
