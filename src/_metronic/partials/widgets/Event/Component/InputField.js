import InputAdornment from '@mui/material/InputAdornment';
// import InputAdornment from '@material-ui/core/InputAdornment';
import ClearIcon from '@mui/icons-material/Clear';
import Input from '@mui/material/Input';
export default function InputField({ index, values, handleChangeFieldValue, onDelete, label, inputRef }) {
  return (
    <>
      <label className="col-lg-1 col-xl-1"
        style={{
          fontSize: '1.5rem',
          paddingTop: typeof label == 'object' ? 0 : 5,
          paddingLeft: typeof label == 'object' ? 20 : 35,
          color: "#5C5C5C", fontWeight: '600'
        }} >
        {label}
      </label>
      <div className="col-lg-11 col-xl-11">
        <Input
          variant="standard"
          value={values || (typeof label == 'object' ? `請輸入選項${index}` : "")}
          key={index}
          placeholder={"請輸入下拉選單的選項"}
          disabled={label === ''}
          inputRef={inputRef}
          sx={{ mb: 5, width: '100%', paddginTop: typeof label == 'object' ? 5 : 1 ,fontSize:'2rem'}}
          onChange={(event) => handleChangeFieldValue(event.target.value)}
          endAdornment={
            index !== 0 && <InputAdornment position="end"
              style={{ cursor: 'pointer' }}
              onClick={() => onDelete()}><ClearIcon />
            </InputAdornment>}
        />
      </div>

    </>
  )
}
