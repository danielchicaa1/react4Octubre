import {View, Text} from 'react-native'
import { useForm, Controller } from "react-hook-form"
export default function HomeScreen({navigation, route}) {
  const {
    control,
    handleSubmit,reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      password:"",
      uri:"",
      age:""
    },
  })


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bienvenid@ {route.params.email}</Text>
      </View>
    );
  }