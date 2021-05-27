import { computed, emit } from "vue";

export function valueAPI(modelValue, emit) {
	return computed({
		get() {
			console.log("get", modelValue.value);
			return modelValue.value;
		},
		set(data) {
			console.log("set", data);
			emit("update:modelValue", data);
		},
	});
}
