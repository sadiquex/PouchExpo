import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

// import DateTimePicker from "react-native-ui-datepicker";
// import SelectDropdown from "react-native-select-dropdown";

type LabelInputFieldProps = {
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  required?: boolean;
  secureTextEntry?: boolean;
  value: string;
  type?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "url";
  onChangeText: (text: string) => void;
  trailingIcon?: React.ReactNode;
  isPasswordField?: boolean;
};

type LabelTextAreaProps = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export const LabelInputField = ({
  label,
  placeholder,
  icon,
  required = false,
  secureTextEntry = false,
  value,
  type = "default",
  onChangeText,
  trailingIcon,
  isPasswordField = false,
}: LabelInputFieldProps) => {
  const [passwordVisible, setPasswordVisible] = useState(secureTextEntry);

  const togglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={labelInputFieldStyles.container}>
      <Text style={labelInputFieldStyles.label}>
        {label}
        {required && <Text style={labelInputFieldStyles.required}>*</Text>}
      </Text>
      <View style={[labelInputFieldStyles.inputWrapper]}>
        {icon && icon}
        <TextInput
          style={labelInputFieldStyles.input}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          keyboardType={type}
          secureTextEntry={isPasswordField ? !passwordVisible : false}
          value={value}
          onChangeText={onChangeText}
        />
        {isPasswordField && (
          <Pressable onPress={togglePasswordVisible}>
            {passwordVisible ? (
              <AntDesign name="eye" size={20} color="#9CA3AF" />
            ) : (
              <Entypo name="eye-with-line" size={20} color="#9CA3AF" />
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
};

export const LabelTextArea = ({
  label,
  placeholder,
  value,
  onChangeText,
}: LabelTextAreaProps) => {
  return (
    <View style={labelTextAreaStyles.container}>
      <Text style={labelTextAreaStyles.label}>{label}</Text>
      <View style={labelTextAreaStyles.textAreaWrapper}>
        <TextInput
          style={labelTextAreaStyles.textArea}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          value={value}
          onChangeText={onChangeText}
          multiline={true}
        />
      </View>
    </View>
  );
};

// export const LabelDatePicker = () => {
//   const [showPicker, setShowPicker] = useState(false);
//   const [date, setDate] = useState("");
//   return (
//     <View className="w-full py-2 relative">
//       <Text className="mb-2">Select Date:</Text>
//       <TouchableOpacity
//         className="bg-white p-3 border border-gray-300 rounded-xl"
//         onPress={() => setShowPicker(!showPicker)}
//       >
//         <Text>Select Date</Text>
//       </TouchableOpacity>
//       <View className="w-full absolute top-[70px] z-50">
//         {showPicker && (
//           <View className="bg-white rounded-lg mt-1 border border-gray-200 p-4 w-[85%] mx-auto">
//             <DateTimePicker
//               mode="single"
//               // date={date}
//               // onChange={(params) => setDate(params.date)}
//               calendarTextStyle={styles.datePickerTextStyle}
//               headerTextStyle={{ fontSize: 14, fontFamily: "Lexend" }}
//               weekDaysTextStyle={styles.datePickerTextStyle}
//             />
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// export const DropDownOptions = ({ data, sectionTitle }: any) => {
//   return (
//     <SelectDropdown
//       data={data}
//       onSelect={(selectedItem, index) => {
//         console.log(selectedItem, index);
//       }}
//       renderButton={(selectedItem, isOpened) => {
//         return (
//           <View className="w-full text-sm p-2 border border-gray-200 flex flex-row justify-center items-center rounded-lg">
//             <Text className="flex-1 text-gray-400 font-lexend flex items-center justify-center">
//               {(selectedItem && selectedItem.title) || sectionTitle}
//             </Text>
//             {isOpened ? (
//               <ChevronUp className="text-gray-400" />
//             ) : (
//               <ChevronDown className="text-gray-400" />
//             )}
//           </View>
//         );
//       }}
//       renderItem={(item, index, isSelected) => {
//         return (
//           <View
//             className={`w-full flex flex-row px-4 justify-center items-center py-2 ${
//               isSelected && "bg-gray-300"
//             }`}
//           >
//             <Text className="flex-1 text-gray-700">{item.label}</Text>
//           </View>
//         );
//       }}
//       showsVerticalScrollIndicator={false}
//       dropdownStyle={styles.dropdownMenuStyle}
//     />
//   );
// };

const styles = StyleSheet.create({
  datePickerTextStyle: { fontSize: 12, fontFamily: "Lexend" },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
});

const labelInputFieldStyles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 8,
    marginBottom: 2,
  },
  label: {
    marginBottom: 4,
  },
  required: {
    color: "#2563eb",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    width: "100%",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    padding: 8,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    color: "#4B5563",
  },
});

const labelTextAreaStyles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 8,
  },
  label: {
    marginBottom: 4,
  },
  textAreaWrapper: {
    gap: 8,
    width: "100%",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 16,
    padding: 8,
    backgroundColor: "white",
    height: 160, // Adjust the height as per requirement (h-40 in Tailwind)
  },
  textArea: {
    color: "#4B5563",
  },
});
