import { extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#f1f5fb",
      100: "#d5e2f2",
      200: "#b9cfea",
      300: "#9dbce1",
      400: "#81a9d9",
      500: "#6596d0",
      600: "#3A76BF",
      700: "#3770b6",
      800: "#2f5f9a",
      900: "#264e7e",
    },
    secondary: {
      50: "#eeebff",
      100: "#cbc7ef",
      200: "#a9a2de",
      300: "#877ccf",
      400: "#6457c1",
      500: "#4b3da7",
      600: "#3a3083",
      700: "#2a225e",
      800: "#18143b",
      900: "#080619",
    },
  },
  shadows: {
    0: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.08,
      shadowRadius: 1.0,
      elevation: 1,
    },
    1: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 1.41,
      elevation: 2,
    },
    2: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2.22,
      elevation: 3,
    },
    3: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 2.62,
      elevation: 4,
    },
    4: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 3.84,
      elevation: 5,
    },
    5: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.7,
      shadowRadius: 4.65,
      elevation: 6,
    },
    6: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.9,
      shadowRadius: 4.65,
      elevation: 7,
    },
    7: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4.65,
      elevation: 8,
    },
    8: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.12,
      shadowRadius: 20,
      elevation: 9,
    },
    9: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.14,
      shadowRadius: 6.27,
      elevation: 10,
    },
  },
  components: {
    VStack: {
      defaultProps: {
        p: [2, 4],
        space: 1,
        alignItems: "center",
      },
    },
    HStack: {
      defaultProps: {
        space: 2.5,
      },
    },
    Button: {
      defaultProps: {
        backgroundColor: "#06283D",
        width: "100%",
        size: "lg",
        borderRadius: 8,
      },
    },
    FormControl: {
      defaultProps: {
        maxWidth: 350,
      },
    },
    Input: {
      defaultProps: {
        space: 1,
        fontWeight: 400,
        fontSize: 13.33,
        size: "lg",
        borderRadius: 8,
      },
    },

    ModalContent: {
      baseStyle: {
        alignItems: "center",
        textAlign: "center",
      },
    },
    ModalHeader: {
      baseStyle: {
        borderBottomWidth: "0",
      },
      defaultProps: {
        _text: {
          fontSize: "xl",
          fontWeight: "bold",
        },
      },
    },
    ModalFooter: {
      baseStyle: {
        borderTopWidth: "0",
      },
    },
    Link: {
      baseStyle: {
        isUnderlined: false,
      },
    },
    Text: {
      baseStyle: {
        textAlign: "left",
        // alignItems: "left",
      },
    },
  },
});

export default theme;
