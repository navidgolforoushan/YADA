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
} from "@ionic/react";
import {
  arrowBackCircleSharp,
  arrowBackOutline,
  backspaceOutline,
  chatbubbleEllipsesOutline,
  heartOutline,
  logoHackernews,
  optionsOutline,
  starOutline,
} from "ionicons/icons";
import pageTransitionAnimationSwipLeft, {
  pageTransitionAnimationSwipRight,
} from "../animations/PageTransitionAnimation";
import FooterMain from "../components/FooterMain";
import OptionInterestedIn from "../components/OInterestedIn";
import Home from "./Home";
import "./Options.css";

const Options: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonButtons slot="secondary">
              <IonNavLink
                routerDirection="forward"
                component={() => <Home />}
                routerAnimation={pageTransitionAnimationSwipLeft}
              >
                <IonButton color="dark">
                  <IonIcon slot="icon-only" icon={arrowBackOutline}></IonIcon>
                </IonButton>
              </IonNavLink>
            </IonButtons>
            <span> Dating Preferences</span>
          </IonToolbar>
        </IonHeader>
        <IonItem class="margin-2x-top" lines="none">
          Member Preferences
        </IonItem>
        <IonList>
          <IonItem>
            <IonNavLink
              routerDirection="forward"
              component={() => <OptionInterestedIn />}
              routerAnimation={pageTransitionAnimationSwipLeft}
            >
              <IonLabel>
                <h3>I'm interested in</h3>
                <p>Women</p>
              </IonLabel>
            </IonNavLink>
          </IonItem>
          <IonItem>
            <IonNavLink
              routerDirection="forward"
              component={() => <OptionInterestedIn />}
              routerAnimation={pageTransitionAnimationSwipLeft}
            >
              <IonLabel>
                <h3>My neighborhood</h3>
                <p>Balboaway</p>
              </IonLabel>
            </IonNavLink>
          </IonItem>
          <IonItem>
            <IonNavLink
              routerDirection="forward"
              component={() => <OptionInterestedIn />}
              routerAnimation={pageTransitionAnimationSwipLeft}
            >
              <IonLabel>
                <h3>Maximum distance</h3>
                <p>20 mi</p>
              </IonLabel>
            </IonNavLink>
          </IonItem>
          <IonItem>
            <IonNavLink
              routerDirection="forward"
              component={() => <OptionInterestedIn />}
              routerAnimation={pageTransitionAnimationSwipLeft}
            >
              <IonLabel>
                <h3>Age range</h3>
                <p>23 - 35</p>
              </IonLabel>
            </IonNavLink>
          </IonItem>
          <IonItem>
            <IonNavLink
              routerDirection="forward"
              component={() => <OptionInterestedIn />}
              routerAnimation={pageTransitionAnimationSwipLeft}
            >
              <IonLabel>
                <h3>Ethnicity</h3>
                <p>Open to all</p>
              </IonLabel>
            </IonNavLink>
          </IonItem>
          <IonItem>
            <IonNavLink
              routerDirection="forward"
              component={() => <OptionInterestedIn />}
              routerAnimation={pageTransitionAnimationSwipLeft}
            >
              <IonLabel>
                <h3>Religion</h3>
                <p>Open to all</p>
              </IonLabel>
            </IonNavLink>
          </IonItem>
        </IonList>
      </IonContent>
      <FooterMain />
    </IonPage>
  );
};

export default Options;
