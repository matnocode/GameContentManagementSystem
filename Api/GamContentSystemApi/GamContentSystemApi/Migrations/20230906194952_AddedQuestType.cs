using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GamContentSystemApi.Migrations
{
    /// <inheritdoc />
    public partial class AddedQuestType : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Quests",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "QuestType",
                table: "Quests",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Quests");

            migrationBuilder.DropColumn(
                name: "QuestType",
                table: "Quests");
        }
    }
}
