import type { ReactNode } from "react";
import type { CopyList } from "./home-copy";
import styles from "./home.module.css";

type HomeCopyBodyProps = {
  body?: string;
  list?: CopyList;
};

const copyListItemToNode = (item: string): ReactNode => (
  <li key={item}>{item}</li>
);

export const HomeCopyBody = ({
  body,
  list,
}: HomeCopyBodyProps): ReactNode => {
  const ListElement = list?.style === "ordered" ? "ol" : "ul";

  return (
    <div className={styles.copyBody}>
      {body ? <p>{body}</p> : null}
      {list ? (
        <ListElement className={styles.copyList}>
          {list.items.map(copyListItemToNode)}
        </ListElement>
      ) : null}
    </div>
  );
};
