const [fontsLoaded] = useFonts({
    "CharmanSerif": require("@/assets/fonts/CharmanSerif-Black.otf"),
    
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }