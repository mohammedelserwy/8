import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { StyleSheet, I18nManager, Platform } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";

export const wp = widthPercentageToDP;
export const hp = heightPercentageToDP;

export const primaryColor = "#502c84";
export const secondaryColor = "#201e1e";
export const thirdColor = "#49b0ff";
export const fourthColor = "#61cc51";
export const toastBG = "#fffdcc";
export const lightBar = "#fff";
export const rippleColor = "rgba(0,0,0,0.02)";

export const fontRegular = "Almarai-Regular";
export const fontLight = "Almarai-Light";
export const fontSemiBold = "Almarai-Bold";
export const fontBold = "Almarai-ExtraBold";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerPaddingTen: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: wp(5),
    paddingBottom: hp(3),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonOne: {
    backgroundColor: primaryColor,
    borderRadius: wp(5),
    paddingHorizontal: wp(2),
    paddingVertical: wp(2),
    width: wp(90),
    alignSelf: "center",
  },
  buttonTwo: {
    backgroundColor: "#fff",
    borderRadius: wp(3),
    paddingHorizontal: wp(2),
    paddingVertical: wp(2),
    width: wp(90),
    alignSelf: "center",
  },
  buttonThree: {
    backgroundColor: secondaryColor,
    borderRadius: wp(3),
    paddingHorizontal: wp(2),
    paddingVertical: wp(2),
    width: wp(90),
    alignSelf: "center",
  },
  buttonStyle: { paddingHorizontal: wp(0), paddingVertical: wp(0) },
  labelOne: {
    color: "#fff",
    fontFamily: fontBold,
    fontSize: wp(4.2),
    textTransform: "capitalize",
    fontWeight: "900",
  },
  labelTwo: {
    color: primaryColor,
    fontFamily: fontBold,
    fontSize: wp(4.2),
    textTransform: "capitalize",
    fontWeight: "900",
  },
  labelThree: {
    color: "#fff",
    fontFamily: fontBold,
    fontSize: wp(4.2),
    textTransform: "capitalize",
    fontWeight: "900",
  },
  largeButton: {
    backgroundColor: primaryColor,
    borderRadius: wp(1),
    paddingHorizontal: wp(2),
    paddingVertical: wp(1.3),
  },
  largeLabel: {
    color: "#fff",
    fontFamily: fontBold,
    fontSize: wp(4),
    textTransform: "capitalize",
  },
  fontBoldStyle: {
    fontSize: wp(3.5),
    color: "#000",
    fontFamily: fontBold,
    fontWeight: "900",
  },
  fontRegularStyle: {
    fontSize: wp(3.5),
    color: "#000",
    fontFamily: fontRegular,
  },
  fontSemiBoldStyle: {
    fontSize: wp(3.5),
    color: "#000",
    fontFamily: fontSemiBold,
  },
  fontLightStyle: {
    fontSize: wp(3.5),
    color: "#000",
    fontFamily: fontLight,
  },
  inputContainer: {
    width: wp(90),
    alignSelf: "center",
  },
  inputMGT: {
    marginTop: hp(3),
  },
  inputStyle: {
    fontSize: wp(3.5),
  },
  textArea: {
    height: hp(15),
  },
  drawerTextStyle: {
    fontFamily: fontBold,
    color: "#000",
  },
  drawerHeaderIcons: {
    backgroundColor: "#fff",
    width: wp(10),
    height: wp(10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp(10),
  },
  drawerBoxHeader: {
    backgroundColor: thirdColor,
    height: wp(75),
    top: hp(-8),
    paddingTop: hp(10),
    paddingHorizontal: wp(5),
    overflow: "visible",
  },
  fontSizeXS: {
    fontSize: wp(3.5),
  },
  fontSizeSM: {
    fontSize: wp(4),
  },
  fontSizeM: {
    fontSize: wp(4.5),
  },
  fontSizeL: {
    fontSize: wp(5),
  },
  fontSizeXL: {
    fontSize: wp(5.5),
  },
  fontSizeXXL: {
    fontSize: wp(6),
  },
  fontSizeHuge: {
    fontSize: wp(7),
  },
  colorfff: {
    color: "#fff",
  },
  color000: {
    color: "#000",
  },
  color828282: {
    color: "#828282",
  },
  width20: {
    width: wp(20),
  },
  width30: {
    width: wp(30),
  },
  width45: {
    width: wp(45),
  },
  width60: {
    width: wp(60),
  },
  width75: {
    width: wp(75),
  },
  width90: {
    width: wp(90),
  },
  fontWhite: {
    color: "#fff",
  },
  fontBlack: {
    color: "#000",
  },
  fontGrey: {
    color: "#828282",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  drawerListItemIcon: {
    width: wp(8),
    height: wp(8),
    marginRight: wp(3),
    alignSelf: "center",
  },
  listItem: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: wp(2),
    paddingVertical: wp(0.5),
    marginVertical: hp(1),
  },
  drawerListItemContainer: {
    backgroundColor: "#fff",
    width: wp(85),
    alignSelf: "center",
    marginTop: 0,
    elevation: 1,
    shadowOpacity: 0.5,
    // shadowOffset: {width: 5, height: 5},
    shadowRadius: 5,
    shadowColor: "rgba(0,0,0,0.2)",
    marginTop: wp(-20),
    padding: wp(4),
    borderRadius: wp(3),
    paddingBottom: hp(7),
  },
  codeInputStyle: {
    backgroundColor: "#f7f8f9",
    color: "#000",
    borderRadius: wp(0.8),
    fontSize: wp(5),
    fontFamily: fontRegular,
  },
  headerStyle: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === "ios" ? 1 : 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: Platform.OS === "ios" ? 2.65 : 4.65,
    elevation: Platform.OS === "ios" ? 2 : 8,
    borderBottomLeftRadius: wp(5),
    borderBottomRightRadius: wp(5),
    height: wp(20),
    ...ifIphoneX(
      {
        height: wp(21),
      },
      {
        height: wp(20),
      }
    ),
  },
  headerTitleStyle: {
    fontFamily: fontBold,
    fontSize: wp(4.5),
    fontWeight: "900",
    color: "#000",
  },
  spinnerContainer: {
    position: "absolute",
    top: 0,
    zIndex: 999,
    width: wp(100),
    height: hp(100),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "rgba(52, 52, 52, 0.4)",
    flex: 1,
    flexGrow: 10,
  },
  spinnerStyle: {
    position: "absolute",
    zIndex: 999,
    width: wp(20),
    height: wp(20),
    borderRadius: 5,
  },
  langLogo: { width: wp(55), height: hp(30), alignSelf: "center" },
  langButton: {
    alignItems: "center",
    width: wp(30),
    paddingVertical: wp(4),
    borderRadius: wp(5),
  },
  checkBoxContainer: {
    width: wp(7),
    height: wp(7),
    borderRadius: wp(1),
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
