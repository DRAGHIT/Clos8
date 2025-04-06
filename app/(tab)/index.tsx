import React,{ useState, useRef, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Image, Pressable, Modal, TouchableOpacity } from "react-native";
import { 
  CameraView,
  useCameraPermissions,
  CameraCapturedPicture,
 } from "expo-camera";
import Slider from "@react-native-community/slider";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Tab() {
  const [facing, setFacing] = useState<"back" | "front">("back");
  const [Zoom,  setZoom] = useState(0);
  const [capturedPhotos, setCapturedPhotos] = useState<Array<{uri: string}>>(
    []
  );
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  useEffect(() => {
    loadSavedPhotos();
  }, []);

  const loadSavedPhotos = useCallback(async () => {
    try {
      const savedPhotos = await AsyncStorage.getItem("capturedPhotos");
      if(savedPhotos){
        setCapturedPhotos(JSON.parse(savedPhotos));
      }
    }
    catch (error) {
      console.error("Failed to get saved photos", error);
    }
  }, []);

  const savePhoto = useCallback(
    async (newPhoto: { uri: string }) => {
      try{
        const updatedPhotos = [newPhoto, ...capturedPhotos];
        await AsyncStorage.setItem(
          "capturedPhotos",
          JSON.stringify(updatedPhotos)
      );
      setCapturedPhotos(updatedPhotos);
    } catch (error) {
      console.error("Failed to save photo", error);
    }
  },
  [capturedPhotos]
  );

  const toggleCameraFacing = useCallback(() => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }, []);

  const handleZoomChange = useCallback((value: number) => {
    setZoom(value);
  }, []);

  const takePicture = useCallback(async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 1,
        base64: false,
        exif: false,  
      });
      if(photo){
        await savePhoto({ uri: photo.uri });
      }
      
    }  
  }, [savePhoto]);

  if(!cameraPermission){
    return <View />;
  }
  if(!cameraPermission?.granted){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>
          We need your permission to show the camera
        </Text>
        <TouchableOpacity style={styles.button} onPress={requestCameraPermission}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>   
    );
  }

  return  (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.camera}
        facing={facing}
        zoom={Zoom}
      >
      <View style={styles.controlsContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={toggleCameraFacing}
          >
            <Text style={styles.buttonText}>Flip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Zoom: {Zoom.toFixed(1)}x</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1}
            step={0.1}
            value={Zoom}
            onValueChange={handleZoomChange}
          />
        </View>
        {(
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.captureButton}
              onPress={takePicture}
            >
              <Text style={styles.capturebuttonText}>Capture</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      </CameraView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
  },
  controlsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText:{
    color: "#000",
    fontSize: 16,
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
  slider: {
    flex: 1,
    marginLeft: 10,
  },
  captureButton: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  capturebuttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginTop: 10,
  },
});

