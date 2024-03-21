import {
  View,
  Text,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  useGetPostsQuery,
  useGetTodosQuery,
  usePostPostsMutation,
} from "../../redux/features/common/commonRtk";
import Config from "react-native-config";
import DeviceInfo from "react-native-device-info";
import SafeScreen from "../../component/Layout/SafeScreen";
import { auth_SET_TOKEN } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../app/hooks";
import Loading from "../../component/Loading/Loading";

const EmptyPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const {
    data: dataTodos,
    isSuccess,
    isLoading,
    isFetching,
    error,
  } = useGetTodosQuery();
  const {
    data: dataPosts,
    isSuccess: dataPostsSuccess,
    isLoading: dataPostsLoading,
  } = useGetPostsQuery({
    page: page,
    pageSize: 10,
  });
  const [
    postPost,
    { isSuccess: postPostsSuccess, data: dataPostPosts, error: postPostsError },
  ] = usePostPostsMutation();
  const reqPermision = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS // or POST_NOTIFICATIONS
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("notofication granted");
      } else {
        console.log("notofication not granted");
      }
    } catch (err) {
      console.error(err);
    }
  };
  const onEndListReached = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    console.log("page ", page);
    console.log("loading ", dataPostsLoading);
    console.log("panjang post get ", dataPosts?.length);
  }, [dataPostsLoading, page, dataPosts]);

  // where you need to get permission
  if (Platform.OS == "android" && DeviceInfo.getApiLevelSync() >= 33) {
    reqPermision();
  }
  return (
    <>
      <Loading loading={false} />

      {/* <SafeScreen> */}
      <View style={{ height: "100%", width: "100%", backgroundColor: "pink" }}>
        <Text>EmptyPage11 </Text>
        <Text> data received {dataTodos?.length}</Text>
        <Text> post received {dataPosts?.length}</Text>
        <TouchableOpacity
          style={{ padding: 5, backgroundColor: "pink" }}
          onPress={() => {
            postPost({ name: "wawa" });
          }}
        >
          <Text> posts button </Text>
        </TouchableOpacity>
        <Text> Infinite scroll </Text>
        <View style={{ width: "100%", height: 200, backgroundColor: "purple" }}>
          <FlatList
            data={dataPosts}
            scrollEnabled
            nestedScrollEnabled
            renderItem={({ index, item }) => {
              return (
                <View
                  style={{
                    marginVertical: 3,
                    paddingVertical: 2,
                    paddingHorizontal: 5,
                    backgroundColor: index % 2 ? "gray" : "white",
                    flexDirection: "row",
                  }}
                >
                  <Text>{index + 1}. </Text>
                  <Text>{item.title}</Text>
                </View>
              );
            }}
            onEndReached={() => onEndListReached()}
          />
        </View>
        <View
          style={{
            backgroundColor: "red",
            opacity: 0.9,
            borderColor: "pink",
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 20,
            width: "80%",
            height: "10%",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            style={{ padding: 5 }}
            onPress={() => {
              dispatch(
                auth_SET_TOKEN({
                  token: "wawadsadas",
                  refreshToken: "",
                })
              );
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>
              {"Authenticate me"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </SafeScreen> */}
    </>
  );
};

export default EmptyPage;
