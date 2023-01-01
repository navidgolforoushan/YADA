import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButton,
  IonFooter,
  IonButtons,
  IonIcon,
  IonImg,
  IonCardHeader,
  IonCardSubtitle,
  IonCard,
  IonCardContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonNavLink,
  IonItem,
  IonLabel,
  IonText,
  IonInput,
} from "@ionic/react";
import {
  accessibilityOutline,
  arrowBackOutline,
  beerOutline,
  briefcaseOutline,
  chatbubbleEllipsesOutline,
  closeOutline,
  heartOutline,
  homeOutline,
  iceCreamOutline,
  locationOutline,
  logoHackernews,
  optionsOutline,
  sendOutline,
  starOutline,
} from "ionicons/icons";
import pageTransitionAnimationSwipLeft, {
  pageTransitionAnimationSwipRight,
} from "../animations/PageTransitionAnimation";
import FooterMain from "../components/FooterMain";

import TestComponent from "../components/TestContainer";
import "./Chat.css";

import Options from "./Options";

const Chat: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonToolbar>
              <IonButtons slot="primary">
                <IonNavLink
                  routerDirection="forward"
                  component={() => <Options />}
                  routerAnimation={pageTransitionAnimationSwipLeft}
                >
                  <IonButton color="dark">
                    <IonIcon slot="icon-only" icon={optionsOutline}></IonIcon>
                  </IonButton>
                </IonNavLink>
              </IonButtons>
              <IonButtons slot="secondary" class="head">
                Megan
              </IonButtons>
            </IonToolbar>
          </IonToolbar>
        </IonHeader>
        <div className="sender-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_profile_1/1.jpg" />
            </IonAvatar>
            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="reciever-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_me/avatar.jpg" />
            </IonAvatar>

            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="sender-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_profile_1/1.jpg" />
            </IonAvatar>
            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="sender-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_profile_1/1.jpg" />
            </IonAvatar>
            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="reciever-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_me/avatar.jpg" />
            </IonAvatar>

            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="sender-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_profile_1/1.jpg" />
            </IonAvatar>
            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>{" "}
        <div className="sender-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_profile_1/1.jpg" />
            </IonAvatar>
            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="reciever-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_me/avatar.jpg" />
            </IonAvatar>

            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="sender-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_profile_1/1.jpg" />
            </IonAvatar>
            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>{" "}
        <div className="sender-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_profile_1/1.jpg" />
            </IonAvatar>
            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="reciever-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_me/avatar.jpg" />
            </IonAvatar>

            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="sender-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_profile_1/1.jpg" />
            </IonAvatar>
            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="sender-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_profile_1/1.jpg" />
            </IonAvatar>
            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="reciever-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_me/avatar.jpg" />
            </IonAvatar>

            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="sender-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_profile_1/1.jpg" />
            </IonAvatar>
            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>{" "}
        <div className="sender-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_profile_1/1.jpg" />
            </IonAvatar>
            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="reciever-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_me/avatar.jpg" />
            </IonAvatar>

            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="sender-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_profile_1/1.jpg" />
            </IonAvatar>
            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>{" "}
        <div className="sender-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_profile_1/1.jpg" />
            </IonAvatar>
            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="reciever-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_me/avatar.jpg" />
            </IonAvatar>

            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="sender-message-card">
          <IonCard>
            <IonAvatar>
              <img alt="me" src="/assets/demo_profile_1/1.jpg" />
            </IonAvatar>
            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
      <IonFooter class="ion-no-border">
        <IonGrid class="ion-no-padding">
          <IonRow class="black-toolbar ion-justify-content-around">
            <IonCol>
              <IonInput
                class="message-send-input"
                placeholder="Message...."
              ></IonInput>
            </IonCol>
            <IonCol size="auto">
              <IonButton
                class="message-send-button"
                size="small"
                fill="clear"
                color="light"
              >
                <IonIcon icon={sendOutline}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
      <FooterMain />
    </IonPage>
  );
};

export default Chat;
