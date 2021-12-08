import { FormGroups, FormGroup, Label, InputRadioGroup } from '../../styled-components/FormProfile-styled';
import { InputRadio, LabelRadio, RadioButton } from '../../styled-components/FormProfile-styled';
import { InputSelectGroup, Select } from '../../styled-components/FormProfile-styled';

const SelectInput = (props) => {
  const radioField = [
    { key: '1', name: 'gender', id: 'laki-laki', value: 'Laki-laki' },
    { key: '2', name: 'gender', id: 'perempuan', value: 'Perempuan' },
  ];
  const options = [
    { key: '0', value: '' },
    { key: '1', value: 'Islam' },
    { key: '2', value: 'Kristen' },
    { key: '3', value: 'Katolik' },
    { key: '4', value: 'Hindu' },
    { key: '5', value: 'Buddha' },
  ];

  return (
    <FormGroups>
      <FormGroup>
        <Label>Jenis Kelamin</Label>
        {radioField.map((radio) => (
          <InputRadioGroup key={radio.key}>
            <InputRadio name={radio.name} onChange={props.onChange} id={radio.id} value={radio.value} />
            <LabelRadio htmlFor={radio.id}>
              <RadioButton />
              {radio.value}
            </LabelRadio>
          </InputRadioGroup>
        ))}
      </FormGroup>
      <FormGroup>
        <Label>Agama</Label>
        <InputSelectGroup>
          <Select onChange={props.onChange} name="religion">
            {options.map((option) => (
              <option key={option.key} value={option.value}>
                {option.value}
              </option>
            ))}
          </Select>
        </InputSelectGroup>
      </FormGroup>
    </FormGroups>
  );
};

export default SelectInput;
