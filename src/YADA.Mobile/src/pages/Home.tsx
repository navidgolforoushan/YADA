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
  starOutline,
} from "ionicons/icons";
import pageTransitionAnimationSwipLeft, {
  pageTransitionAnimationSwipRight,
} from "../animations/PageTransitionAnimation";
import FooterMain from "../components/FooterMain";

import TestComponent from "../components/TestContainer";
import Chat from "./Chat";
import "./Home.css";
import Options from "./Options";

const Home: React.FC = () => {
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
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>My life behind the scenes</IonCardSubtitle>
          </IonCardHeader>
          <div>
            <img
              alt="Silhouette of mountains"
              src="/assets/demo_profile_1/1.jpg"
            />
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
              <IonFabButton size="small">
                <IonIcon icon={heartOutline}></IonIcon>
              </IonFabButton>
            </IonFab>
          </div>
        </IonCard>
        <IonCard>
          <IonCardHeader>Go-to Karoke song</IonCardHeader>
          <IonCardContent>
            <p>
              Do I have to pick ONE?😳 Just a Girl-No Doubt Simple Man-Lynyrd
              Skynyrd Criminal-Fiona Apple Santeria-Sublime Here For Ther Party
              Gretchen Willson
            </p>
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
              <IonFabButton size="small">
                <IonIcon icon={heartOutline}></IonIcon>
              </IonFabButton>
            </IonFab>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonGrid>
            <IonRow class="line-bottom">
              <IonCol>
                <IonIcon icon={iceCreamOutline}></IonIcon>
              </IonCol>
              <IonCol class="line-end">30</IonCol>
              <IonCol>
                <IonIcon icon={accessibilityOutline}></IonIcon>
              </IonCol>
              <IonCol class="line-end">5' 8</IonCol>
              <IonCol>
                <IonIcon icon={locationOutline}></IonIcon>
              </IonCol>
              <IonCol class="line-end">Tempe</IonCol>
              <IonCol>
                <IonIcon icon={beerOutline}></IonIcon>
              </IonCol>
              <IonCol>Yes</IonCol>
            </IonRow>
            <IonRow class="line-bottom ion-padding">
              <IonCol size="auto">
                <IonIcon size="large" icon={briefcaseOutline}></IonIcon>
              </IonCol>
              <IonCol class="bio-label">Nusre @ BannerHealth</IonCol>
            </IonRow>
            <IonRow class="ion-padding">
              <IonCol size="auto">
                <IonIcon size="large" icon={homeOutline}></IonIcon>
              </IonCol>
              <IonCol class="bio-label">Phoenix,AZ</IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
        <IonCard>
          <IonImg src="/assets/demo_profile_1/2.jpg"></IonImg>
          <IonCardContent>
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
              <IonFabButton size="small">
                <IonIcon icon={heartOutline}></IonIcon>
              </IonFabButton>
            </IonFab>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonImg src="/assets/demo_profile_1/3.jpg"></IonImg>
          <IonCardContent>
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
              <IonFabButton size="small">
                <IonIcon icon={heartOutline}></IonIcon>
              </IonFabButton>
            </IonFab>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>Typical Sunday</IonCardHeader>
          <IonCardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pellentesque et ante quis faucibus. Curabitur accumsan mattis felis.
            Duis venenatis lacus non velit faucibus, in finibus libero
            sollicitudin. Integer lacus sapien, tempus ac semper sed, hendrerit
            at justo. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
              <IonFabButton size="small">
                <IonIcon icon={heartOutline}></IonIcon>
              </IonFabButton>
            </IonFab>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonImg src="/assets/demo_profile_1/4.jpg"></IonImg>
          <IonCardContent>
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
              <IonFabButton size="small">
                <IonIcon icon={heartOutline}></IonIcon>
              </IonFabButton>
            </IonFab>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonImg src="/assets/demo_profile_1/5.jpg"></IonImg>
          <IonCardContent>
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
              <IonFabButton size="small">
                <IonIcon icon={heartOutline}></IonIcon>
              </IonFabButton>
            </IonFab>
          </IonCardContent>
        </IonCard>
        <IonFab slot="fixed" vertical="bottom" horizontal="start">
          <IonFabButton>
            <IonIcon icon={closeOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
      <FooterMain />
    </IonPage>
  );
};

export default Home;
