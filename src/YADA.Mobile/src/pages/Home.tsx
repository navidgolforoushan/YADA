import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonFooter,
  IonButtons,
  IonIcon,
  IonImg,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCard,
  IonCardContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
} from "@ionic/react";
import {
  accessibilityOutline,
  arrowBackOutline,
  beerOutline,
  briefcase,
  briefcaseOutline,
  chatbubbleEllipsesOutline,
  closeOutline,
  ellipsisHorizontal,
  ellipsisVertical,
  heartOutline,
  homeOutline,
  iceCreamOutline,
  locationOutline,
  logoHackernews,
  optionsOutline,
  settingsOutline,
  starOutline,
} from "ionicons/icons";

import TestComponent from "../components/TestContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonToolbar>
              <IonButtons slot="primary">
                <IonButton color="dark">
                  <IonIcon slot="icon-only" icon={arrowBackOutline}></IonIcon>
                </IonButton>
                <IonButton color="dark">
                  <IonIcon slot="icon-only" icon={optionsOutline}></IonIcon>
                </IonButton>
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
      <IonFooter class="ion-no-border">
        <IonGrid class="ion-no-padding">
          <IonRow class="black-toolbar ion-justify-content-around">
            <IonCol>
              <IonButton fill="clear" color="light">
                <IonIcon icon={logoHackernews}></IonIcon>
              </IonButton>
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
              <IonButton fill="clear" color="light">
                <IonIcon icon={chatbubbleEllipsesOutline}></IonIcon>
              </IonButton>
            </IonCol>
            <IonCol>
            <IonAvatar>
              <img
                alt="me!"
                src="/assets/demp_me/avatar.jpg"
              />
            </IonAvatar>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
