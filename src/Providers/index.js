import { UserProvider } from "./User";
import { ServicesProvider } from "./Services";
import { RatingsProvider } from "./Ratings";
import { PendingsProvider } from "./Pendings";

const Providers = ({ children }) => (
  <UserProvider>
    <ServicesProvider>
      <RatingsProvider>
        <PendingsProvider>{children}</PendingsProvider>
      </RatingsProvider>
    </ServicesProvider>
  </UserProvider>
);

export default Providers;
