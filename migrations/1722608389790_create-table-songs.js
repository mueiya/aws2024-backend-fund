exports.up = (pgm) => {
  pgm.createTable("songs", {
    id: {
      type: "VARCHAR(50)",
      primaryKey: true,
    },
    title: {
      type: "TEXT",
      notNull: true,
    },
    year: {
      type: "INTEGER",
      notNull: true,
    },
    genre: {
      type: "TEXT",
      notNull: true,
    },
    duration: {
      type: "INTEGER",
      notNull: false,
    },
    album: {
      type: "VARCHAR(50)",
      notNull: false,
    },
  });

  pgm.addConstraint("songs", "fk_album_id", {
    foreignKeys: {
      columns: "album",
      references: "albums(id)",
      onDelete: "CASCADE",
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("songs");
};
