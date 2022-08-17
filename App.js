import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

import {
  home,
  homeAct,
  promo,
  promoAct,
  pesanan,
  pesananAct,
  chat,
  chatAct,
  iconSearch,
  akun,
  gopay,
  gopayAct,
  bayar,
  topup,
  eksplore,
  goRide,
  goCar,
  goFood,
  goSend,
  goMart,
  goMartAct,
  goPulsa,
  checkIn,
  more,
  star,
} from "./assets";

export default function App() {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={{ marginHorizontal: 17, flexDirection: "row" }}>
          {/* search bar */}
          <View
            style={{
              backgroundColor: "#00880c",
              paddingTop: 45,
              flex: 1,
              position: "relative",
            }}
          >
            <TextInput
              style={styles.teksInput}
              placeholder="Cari Layanan, makanan, dan..."
            />
            <Image source={iconSearch} style={styles.iconSearch} />
          </View>
          {/* akun */}
          <View style={styles.partAkun}>
            <Image source={akun} style={styles.iconAkun} />
          </View>
        </View>
      </View>

      <View style={styles.isi}>
        {/* gopay section */}
        <View
          style={{
            marginHorizontal: 17,
            marginTop: 8,
            backgroundColor: "#2C5FB8",
            borderRadius: 18,
            height: 110,
          }}
        >
          {/* gopay */}
          <View style={styles.gopay}>
            <View style={{ flexDirection: "row" }}>
              <Image source={gopayAct} style={styles.iconGopay} />
              <Text style={styles.iconTeksGopay}>gopay</Text>
            </View>
            <Text style={styles.teksGopay}>Rp 50.000</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            {/* menu gopay */}
            <View style={styles.menuGopay}>
              <View style={styles.bgIcons}>
                <Image source={bayar} style={styles.icons} />
              </View>
              <Text style={styles.teksMenuGopay}>Bayar</Text>
            </View>
            <View style={styles.menuGopay}>
              <View style={styles.bgIcons}>
                <Image source={topup} style={styles.icons} />
              </View>
              <Text style={styles.teksMenuGopay}>TopUp</Text>
            </View>
            <View style={styles.menuGopay}>
              <View style={styles.bgIcons}>
                <Image source={eksplore} style={styles.icons} />
              </View>
              <Text style={styles.teksMenuGopay}>Eksplo..</Text>
            </View>
          </View>

          {/* Menu Utama */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* menu 1 */}
            <View style={styles.containerMenu}>
              <View style={styles.bgMenu}>
                <Image source={goRide} style={styles.iconMenu} />
              </View>
              <Text style={styles.teksMenu}>GoRide</Text>
            </View>
            {/* menu 2 */}
            <View style={styles.containerMenu}>
              <View style={styles.bgMenu}>
                <Image source={goCar} style={styles.iconMenu} />
              </View>
              <Text>GoCar</Text>
            </View>
            {/* menu 3 */}
            <View style={styles.containerMenu}>
              <View style={styles.bgMenu}>
                <Image source={goFood} style={styles.iconMenu} />
              </View>
              <Text>GoFood</Text>
            </View>
            {/* menu 4 */}
            <View style={styles.containerMenu}>
              <View style={styles.bgMenu}>
                <Image source={goSend} style={styles.iconMenu} />
              </View>
              <Text>GoSend</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              top: 15,
            }}
          >
            {/* menu 5 */}
            <View style={styles.containerMenu}>
              <View style={styles.bgMenu}>
                <Image source={goMartAct} style={styles.iconMenu} />
              </View>
              <Text style={styles.teksMenu}>GoMart</Text>
            </View>
            {/* menu 6 */}
            <View style={styles.containerMenu}>
              <View style={styles.bgMenu}>
                <Image source={goPulsa} style={styles.iconMenu} />
              </View>
              <Text>GoPulsa</Text>
            </View>
            {/* menu 7 */}
            <View style={styles.containerMenu}>
              <View style={styles.bgMenu}>
                <Image source={checkIn} style={styles.iconMenu} />
              </View>
              <Text>CheckIn</Text>
            </View>
            {/* menu 8 */}
            <View style={styles.containerMenu}>
              <View style={styles.bgMenu}>
                <Image source={more} style={styles.iconMenu} />
              </View>
              <Text>Lainnya</Text>
            </View>
          </View>

          {/* star */}
          <View>
            <View
              style={{
                top: 35,
                height: 55,
                backgroundColor: "lightblue",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
              }}
            >
              <Image source={star} style={styles.iconStar} />
              <Text style={styles.teksStar}>168 XP lagi ada Harta Karun </Text>
            </View>
          </View>

          {/* Akses Cepat */}
          <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 60 }}>
            Akses cepat
          </Text>
          <View>
            <View
              style={{
                backgroundColor: "white",
                borderWidth: 2,
                borderColor: "#f4f4f4",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 20,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
              }}
            >
              <Image source={promoAct} style={{ width: 30, height: 30 }} />
              <Text style={{ fontSize: 16, left: 10 }}>
                5 vouchers akan hangus
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderWidth: 2,
                borderColor: "#f4f4f4",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                padding: 20,
                flexDirection: "row",
                alignItems: "center",
                marginTop: -2,
              }}
            >
              <Image source={goFood} style={{ width: 30, height: 30 }} />
              <Text style={{ fontSize: 16, left: 10 }}>Restoran terdekat</Text>
            </View>
          </View>
        </View>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        {/* icon 1 */}
        <View style={styles.navbar}>
          <Image source={homeAct} style={styles.icon} />
          <Text>Home</Text>
        </View>

        {/* icon 2 */}
        <View style={styles.navbar}>
          <Image source={promo} style={styles.icon} />
          <Text>Promo</Text>
        </View>

        {/* icon 3 */}
        <View style={styles.navbar}>
          <Image source={pesanan} style={styles.icon} />
          <Text>Pesanan</Text>
        </View>

        {/* icon 4 */}
        <View style={styles.navbar}>
          <Image source={chat} style={styles.icon} />
          <Text>Chat</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // header
  header: {
    // flex:1,
    backgroundColor: "#00880c",
    paddingBottom: 10,
  },

  // search bar
  iconSearch: {
    width: 21,
    height: 21,
    position: "absolute",
    marginTop: 55,
    marginLeft: 14,
  },
  iconAkun: {
    width: 22,
    height: 22,
    position: "absolute",
  },
  teksInput: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 25,
    height: 40,
    fontSize: 13,
    paddingLeft: 45,
    paddingRight: 20,
    backgroundColor: "white",
    marginRight: 18,
  },
  // iconAkun
  partAkun: {
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 45,
    backgroundColor: "#f4f4f4",
    borderRadius: 50,
  },

  // gopay
  iconGopay: {
    width: 20,
    height: 20,
  },
  gopay: {
    backgroundColor: "#fff",
    width: 120,
    height: 85,
    top: 12,
    left: 12,
    borderRadius: 12,
    padding: 14,
  },
  iconTeksGopay: {
    fontWeight: "bold",
    fontSize: 18,
    left: 5,
    marginTop: -4,
  },
  teksGopay: {
    color: "#2C5FB8",
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 10,
  },
  icons: {
    width: 20,
    height: 20,
  },
  menuGopay: {
    bottom: 60,
    left: 150,
  },
  teksMenuGopay: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    marginHorizontal: 5,
  },
  bgIcons: {
    backgroundColor: "white",
    width: 30,
    height: 30,
    borderRadius: 8,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  // isi
  isi: {
    flex: 6,
  },
  iconMenu: {
    width: 32,
    height: 32,
  },
  containerMenu: {
    alignItems: "center",
  },
  bgMenu: {
    backgroundColor: "lightblue",
    borderRadius: 15,
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  teksMenu: {
    fontSize: 15,
  },

  // star
  iconStar: {
    width: 35,
    height: 35,
    marginLeft: -15,
  },
  teksStar: {
    fontSize: 17,
    fontWeight: "bold",
    left: 15,
  },

  // footer
  footer: {
    height: 55,
    flexDirection: "row",
  },
  navbar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 26,
    height: 26,
  },
});
