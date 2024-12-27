import React, { useEffect, useRef, useState } from "react";
import styles from "./selectList.module.css";
import cls from "classnames";

type ListType = {
  id: number;
  name: string;
};

interface ISelect {
  label: string;
  list: ListType[];
  selectHandler: (item: ListType | null) => void;
  classnames?: string;
}

export const InputSelectList:React.FC<ISelect> = ({
  list,
  label,
  classnames,
  selectHandler,
}): JSX.Element => {
  const [text, setText] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ListType | null>(null);
  const blurTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (blurTimeout.current) clearTimeout(blurTimeout.current);
    };
  }, []);

  const sortByAlphabet = (list: ListType[], ascending: boolean) =>
    [...list].sort((a, b) => a.name.localeCompare(b.name) * (ascending ? 1 : -1));

  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(text.toLowerCase())
  );

  const handleInputFocus = () => setIsFocus(true);

  const handleInputBlur = () => {

    if(filteredList.length > 0) {
        let firstElement =  sortByAlphabet(filteredList, true)[0];
        setSelectedItem(() => firstElement);
        setText(firstElement.name);
    }
    else {
        setSelectedItem(() => null);
        blurTimeout.current = setTimeout(() => setText(''), 200);
    }

    blurTimeout.current = setTimeout(() => setIsFocus(false), 200);
  };

  const handleInputChanged = (value: string) => {
    setText(value);
  };

  const handleSelectList = (item: ListType) => {
    setText(item.name);
    setSelectedItem(item);
    selectHandler(item);
    setIsFocus(false);
  };

  return (
    <div
      className={cls(styles.select, {
        [styles.disclose]: isFocus,
      })}
    >
      <label
        className={cls(styles.label, {
          [styles.up_label]: isFocus || text.length > 0,
        })}
        htmlFor="text_input_id"
      >
        {label}
      </label>
      <input
        className={cls(styles.input, classnames)}
        type="text"
        id="text_input_id"
        autoComplete="off"
        value={text}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={(e) => handleInputChanged(e.target.value)}
      />
      <ul className={styles.list}>
        {filteredList.length > 0 ? (
          sortByAlphabet(filteredList, true).map((item) => (
            <li
              key={item.id}
              className={styles.list_item}
              onClick={() => handleSelectList(item)}
            >
              {item.name}
            </li>
          ))
        ) : (
          <div className={styles.empty_list}>
            <span>Empty!</span>
          </div>
        )}
      </ul>
    </div>
  );
};
