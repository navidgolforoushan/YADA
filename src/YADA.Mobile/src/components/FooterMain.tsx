import {
  IonButton,
  IonIcon,
  IonNavLink,
  IonAvatar,
  IonCol,
  IonFooter,
  IonGrid,
  IonRow,
} from "@ionic/react";
import {
  chatbubbleEllipsesOutline,
  heartOutline,
  logoHackernews,
  starOutline,
} from "ionicons/icons";
import Chat from "../pages/Chat";
import Home from "../pages/Home";

const FooterMain: React.FC = () => {
  return (
    <IonFooter class="ion-no-border">
      <IonGrid class="ion-no-padding">
        <IonRow class="black-toolbar ion-justify-content-around">
          <IonCol>
            <IonNavLink component={() => <Home />}>
              <IonButton fill="clear" color="light">
                <IonIcon icon={logoHackernews}></IonIcon>
              </IonButton>
            </IonNavLink>
          </IonCol>
          <IonCol>
            <IonButton fill="clear" color="light">
              <IonIcon icon={starOutline}></IonIcon>
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton fill="clear" color="light">
              <IonIcon icon={heartOutline}></IonIcon>
            </IonButton>
          </IonCol>
          <IonCol>
            <IonNavLink component={() => <Chat />}>
              <IonButton fill="clear" color="light">
                <IonIcon icon={chatbubbleEllipsesOutline}></IonIcon>
              </IonButton>
            </IonNavLink>
          </IonCol>
          <IonCol>
            <IonAvatar>
              <img alt="me!" src="/assets/demo_me/avatar.jpg" />
            </IonAvatar>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonFooter>
  );
};

export default FooterMain;
