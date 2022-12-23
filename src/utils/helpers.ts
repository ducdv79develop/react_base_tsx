export function onBlur(name: string, value: string, setValue: any) {
  setValue(name, value.trim(), { shouldValidate: true });
}
