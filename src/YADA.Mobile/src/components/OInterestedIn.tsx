import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonNavLink,
  IonItem,
  IonLabel,
  IonAvatar,
  IonCol,
  IonFooter,
  IonGrid,
  IonRow,
  IonList,
  IonCheckbox,
  IonBackButton,
} from "@ionic/react";
import {
  arrowBackOutline,
  chatbubbleEllipsesOutline,
  heartOutline,
  logoHackernews,
  starOutline,
} from "ionicons/icons";
import { pageTransitionAnimationSwipRight } from "../animations/PageTransitionAnimation";
import Options from "../pages/Options";
import FooterMain from "./FooterMain";

const OptionInterestedIn: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonButtons slot="secondary">
              <IonNavLink
                routerDirection="forward"
                component={() => <Options />}
                routerAnimation={pageTransitionAnimationSwipRight}
              >
                <IonButton color="dark">
                  <IonIcon slot="icon-only" icon={arrowBackOutline}></IonIcon>
                </IonButton>
              </IonNavLink>
            </IonButtons>
            <span>Interested in</span>
          </IonToolbar>
        </IonHeader>
        <IonItem class="margin-2x-top" lines="none">
          Select all who you're open to meeting
        </IonItem>

        <IonList>
          <IonItem>
            <IonLabel>Women</IonLabel>
            <IonCheckbox slot="end"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonLabel>Men</IonLabel>
            <IonCheckbox slot="end"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonLabel>No-Binary People</IonLabel>
            <IonCheckbox slot="end"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonLabel>Everyone</IonLabel>
            <IonCheckbox slot="end"></IonCheckbox>
          </IonItem>
        </IonList>
      </IonContent>
      <FooterMain />
    </IonPage>
  );
};

export default OptionInterestedIn;
