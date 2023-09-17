using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GamContentSystemApi.Migrations
{
    /// <inheritdoc />
    public partial class EntityRedesign : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "QuestType",
                table: "Quests");

            migrationBuilder.AddColumn<int>(
                name: "BaseItemId",
                table: "Quests",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "QuestActionId",
                table: "Quests",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "StoryChapterId",
                table: "Quests",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Quests",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Item",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Item", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "QuestAction",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_QuestAction", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "StoryChapter",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Summary = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StoryChapter", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BaseItem",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CharacterId = table.Column<int>(type: "int", nullable: true),
                    ItemId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BaseItem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BaseItem_Characters_CharacterId",
                        column: x => x.CharacterId,
                        principalTable: "Characters",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_BaseItem_Item_ItemId",
                        column: x => x.ItemId,
                        principalTable: "Item",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Quests_BaseItemId",
                table: "Quests",
                column: "BaseItemId");

            migrationBuilder.CreateIndex(
                name: "IX_Quests_QuestActionId",
                table: "Quests",
                column: "QuestActionId");

            migrationBuilder.CreateIndex(
                name: "IX_Quests_StoryChapterId",
                table: "Quests",
                column: "StoryChapterId");

            migrationBuilder.CreateIndex(
                name: "IX_BaseItem_CharacterId",
                table: "BaseItem",
                column: "CharacterId");

            migrationBuilder.CreateIndex(
                name: "IX_BaseItem_ItemId",
                table: "BaseItem",
                column: "ItemId");

            migrationBuilder.AddForeignKey(
                name: "FK_Quests_BaseItem_BaseItemId",
                table: "Quests",
                column: "BaseItemId",
                principalTable: "BaseItem",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Quests_QuestAction_QuestActionId",
                table: "Quests",
                column: "QuestActionId",
                principalTable: "QuestAction",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Quests_StoryChapter_StoryChapterId",
                table: "Quests",
                column: "StoryChapterId",
                principalTable: "StoryChapter",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Quests_BaseItem_BaseItemId",
                table: "Quests");

            migrationBuilder.DropForeignKey(
                name: "FK_Quests_QuestAction_QuestActionId",
                table: "Quests");

            migrationBuilder.DropForeignKey(
                name: "FK_Quests_StoryChapter_StoryChapterId",
                table: "Quests");

            migrationBuilder.DropTable(
                name: "BaseItem");

            migrationBuilder.DropTable(
                name: "QuestAction");

            migrationBuilder.DropTable(
                name: "StoryChapter");

            migrationBuilder.DropTable(
                name: "Item");

            migrationBuilder.DropIndex(
                name: "IX_Quests_BaseItemId",
                table: "Quests");

            migrationBuilder.DropIndex(
                name: "IX_Quests_QuestActionId",
                table: "Quests");

            migrationBuilder.DropIndex(
                name: "IX_Quests_StoryChapterId",
                table: "Quests");

            migrationBuilder.DropColumn(
                name: "BaseItemId",
                table: "Quests");

            migrationBuilder.DropColumn(
                name: "QuestActionId",
                table: "Quests");

            migrationBuilder.DropColumn(
                name: "StoryChapterId",
                table: "Quests");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Quests");

            migrationBuilder.AddColumn<int>(
                name: "QuestType",
                table: "Quests",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
