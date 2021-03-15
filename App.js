import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Store, Persistor } from "./Src/Store/Store";
import Navigator from "./Src/Shared/Navigation/Navigator";
import CardBoardDetail from "./Src/Shared/Component/Card/CardBoardDetail";
import AnimatedSplash from "react-native-animated-splash-screen";
import { navigationRef } from "./Src/Shared/Navigation/Nav";
import Newcard from "./Src/Features/NewCard/Newcard";
import Team from "./Src/Features/TeamPage/Team";
import ModalPhoto from "./Src/Shared/Component/Modal/ModalPhoto";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <NavigationContainer ref={navigationRef}>
          <AnimatedSplash
            logoWidht={109}
            logoHeight={109}
            isLoaded={isLoaded}
            backgroundColor={"#37266C"}
            logoImage={require("./Src/Assets/Logo/Union.png")}
          >
            {/* <Newcard /> */}
            <Navigator />
          </AnimatedSplash>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
